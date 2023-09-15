const Header = ({course}) => {
  return (
      <h1>{course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  )
}

const Content = (props) => {
  console.log(props.parts)
  return (
    <>
      <Part name = {props.parts[0].part1} exercises = {props.parts[0].exercises1} />
      <Part name = {props.parts[1].part2} exercises = {props.parts[1].exercises2} />
      <Part name = {props.parts[2].part3} exercises = {props.parts[2].exercises3} />
    </>
  )
}

const Total = (prop) => {
  console.log(prop)
  return <p>Number of exercises {prop.exercises1 + prop.exercises2 + prop.exercises3}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {part1: 'Fundamentals of React', exercises1: 10},
    {part2: 'Using props to pass data', exercises2: 7},
    {part3: 'State of a component', exercises3: 14},
  ]


  return (
    <div>
      <Header course={course}/>
      <Content parts = {parts} />
      <Total exercises1 = {parts[0].exercises1} exercises2 = {parts[1].exercises2} exercises3 = {parts[2].exercises3} />
    </div>
  )
}

export default App