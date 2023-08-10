export interface IHelloWorld {
  text: string
}

export const HelloWorld = ({ text }: IHelloWorld) => {
  return <div>This is test text: {text}</div>
}
