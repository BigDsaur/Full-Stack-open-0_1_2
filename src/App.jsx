const Header = ({ course }) => {
  console.log("Rendering Header");
  return <h1>{course}</h1>;
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  console.log("Rendering Content");
  return (
    <div>
      <Part {...parts[0]} />
      <Part {...parts[1]} />
      <Part {...parts[2]} />
    </div>
  );
};

const Total = ({ parts }) => {
  console.log("Rendering Total");
  return (
    <p>Number of exercises {parts.reduce((sum, part) => sum + part.exercises, 0)}</p>
  );
};

const Course = (props) => {
  console.log(props)
  const { course } = props
  return (
    <div>
    <Header course={course.name}/>
    <Content parts={course.parts}/>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App