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


export default Course