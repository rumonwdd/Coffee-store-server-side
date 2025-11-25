import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee , coffiee, setCoffee }) => {
  const { _id, name, chef, supplier, taste, category, detail, photo } = coffee;

  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        
        console.log('deleted confirmed')
        fetch(`http://localhost:5000/coffees/${_id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffiee.filter(cof => cof._id !== _id);
              setCoffee(remaining);
            }
          });
      }
    });
    
      
  };

  return (
    <div className="card card-side bg-base-100 shadow-sm">
      <figure>
        <img src={photo} alt="Photo" />
      </figure>
      <div className="flex justify-between w-full py-4">
        <div className="pl-8">
          <h2 className="card-title">Name: {name}</h2>
          <p>{chef}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
          <p>{category}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="flex flex-col gap-2 space-y-3">
            <button className="border px-4 py-2 bg-slate-100 text-left hover:bg-slate-200">
              View
            </button>
            <Link to={`/updateCoffee/${_id}`}>
              <button className="border px-4 py-2 bg-slate-100 text-left hover:bg-slate-200">
                Edit
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="border px-4 py-2 bg-red-500 text-left hover:bg-slate-200"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
