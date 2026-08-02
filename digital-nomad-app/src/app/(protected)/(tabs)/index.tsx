import { useCategoryFindAll } from '@/domain/category/operations/useCategoryFindAll'
import { CityPreview } from '@/domain/city/City'
import { Box } from '@/ui/components/Box'
import { CityCard } from '@/ui/components/CityCard'
import { Screen } from '@/ui/components/Screen'
import { CityFilter } from '@/ui/containers/CityFilter'

import { useCityFindAll } from '@/domain/city/operations/useCityFindAll'
import { useAppTheme } from '@/ui/theme/useAppTheme'
import { useDebounce } from '@/utils/hooks/useDebounce'

import { Text } from '@/ui/components/Text'
import { useScrollToTop } from 'expo-router/react-navigation'
import { useRef, useState } from 'react'
import { ListRenderItemInfo } from 'react-native'
import Animated, { FadingTransition } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function HomeScreen() {
  const { spacing } = useAppTheme()
  const { top } = useSafeAreaInsets()
  const [cityName, setCityName] = useState('')

  const debouncedCityName = useDebounce(cityName)
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null)

  const {
    data: cities,
    isLoading,
    error,
  } = useCityFindAll({
    name: debouncedCityName,
    categoryId: selectedCategoryId,
  })

  const { data: categories } = useCategoryFindAll()

  const flatListRef = useRef(null)
  useScrollToTop(flatListRef)

  function renderItem({ item }: ListRenderItemInfo<CityPreview>) {
    return (
      <Box paddingHorizontal="padding">
        <CityCard cityPreview={item} />
      </Box>
    )
  }

  function renderEmptyComponent() {
    let Content

    if (isLoading) {
      Content = <Text>carregando cidades...</Text>
    } else if (error) {
      Content = <Text>erro ao carregar cidades. {error.message}</Text>
    } else {
      Content = <Text>não há cidades no momento</Text>
    }

    return (
      <Box alignSelf="center" mt="s32">
        {Content}
      </Box>
    )
  }

  return (
    <Screen style={{ paddingHorizontal: 0 }}>
      <Animated.FlatList
        itemLayoutAnimation={FadingTransition.duration(500)}
        ref={flatListRef}
        contentContainerStyle={{
          gap: spacing.padding,
          paddingTop: top,
          paddingBottom: spacing.padding,
        }}
        data={cities}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        ListEmptyComponent={renderEmptyComponent()}
        ListHeaderComponent={
          <CityFilter
            categories={categories}
            cityName={cityName}
            onChangeCityName={setCityName}
            selectedCategoryId={selectedCategoryId}
            onChangeSelectedCategoryId={setSelectedCategoryId}
          />
        }
      />
    </Screen>
  )
}
