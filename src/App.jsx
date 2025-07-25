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
      <Part {...parts[3]} />
    </div>
  );
};

const Total = ({ parts }) => {
  console.log("Reducella laskeminen");
  return (
    <h3>Number of exercises {parts.reduce((sum, part) => sum + part.exercises, 0)}</h3>
  );
};

const Course = (props) => {
  console.log(props)
  const { course } = props
  return (
    <div>
      {course.map((singleCourse) => {
        return (
          <div key={singleCourse.id}>
            <Header course={singleCourse.name} />
            <Content parts={singleCourse.parts} />
            <Total parts={singleCourse.parts} />
          </div>
        );
      })}
    </div>
  )
}

const App = () => {
  const courses = [
    {
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Course course={courses}/>
    </div>
  )
}

export default App