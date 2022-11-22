type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="container mx-auto p-8 max-w-2xl">{children}</div>
}

export default Container
