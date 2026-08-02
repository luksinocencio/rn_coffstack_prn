import { PostComment, User } from './interfaces'

const joao: User = {
  name: 'João',
  userName: 'joao_paulo',
  email: 'joao@mail.com',
}

const comment: PostComment = {
  content: 'Conteúdo do comentátio',
  likes: 5,
  user: joao,
}

// type ContentType = PostComment['content'] // quando queremos acessar valores de forma dinamica

/**
 * Vamos receber o primeiro parametro do tipo generico
 * No segundo parametro iremos receber uma chave do tipo generico
 * Type -> Tipo do objeto
 * Key -> Tipo da chave do objeto
 */
function getProperty<Type, Key extends keyof Type>(
  value: Type,
  key: Key
): Type[Key] {
  return value[key]
}

const value = getProperty(comment, 'content')

console.log(value)
