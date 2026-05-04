const PopularCoursesSecton = async () => {

  const res = await fetch('https://skillsphere-sooty.vercel.app/data.json')
  const allCourses = await res.json()

  // const sortedCourses = allCourses?.sort((a, b) => b.rating - a.rating);
  // const topCourses = sortedCourses?.slice(0, 3)
  console.log(allCourses)

  return (
    <h1>healdj</h1>
  )

}

export default PopularCoursesSecton;