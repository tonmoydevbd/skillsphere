import Image from "next/image";

const CourseCard = ({ course }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm border">
      <figure className="px-10 pt-10 relative w-full aspect-square">
        <Image
          src={course.image}
          fill
          // width={500}
          // height={500}
          alt={course.title}
          className="rounded-xl object-cover"
          sizes="(max-width: 768px) 100vw, (max-width:1200px)50vw, 33vw"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{course.title}</h2>
        <div>
          <p>Instructor: {course.instructor}</p>
          <p>Rating: {course.rating}</p>
        </div>
        <div className="card-actions">
          <button className="btn btn-primary">Show Details</button>
        </div>
      </div>
    </div>
  )
}

export default CourseCard;