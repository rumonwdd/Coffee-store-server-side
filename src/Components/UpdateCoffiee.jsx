import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffiee = () => {
  const coffee = useLoaderData();

  const { _id, name, chef, supplier, taste, category, detail, photo } = coffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const detail = form.detail.value;
    const photo = form.photo.value;

    const newCoffee = { name, chef, supplier, taste, category, detail, photo };
    console.log(newCoffee);

    fetch(
      `https://coffie-store-clinet-hltydeeek-rumon-islams-projects.vercel.app/coffee/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newCoffee),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "The coffee updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to add coffee",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  return (
    <div className="p-32 bg-amber-50 border-3">
      <h2 className="text-4xl font-extrabold text-center mb-4">
        Add an Coffee
      </h2>
      <form onSubmit={handleUpdateCoffee}>
        <div className="flex mx-auto">
          {/* name and chef section */}

          <div className="w-1/2 mb-8 mr-5">
            <label className="m-2 font-bold">Name of coffee</label>
            <br />
            <input
              className="input w-full"
              type="text"
              name="name"
              defaultValue={name}
              placeholder="Name of coffee"
              required
            />
          </div>
          <div className="w-1/2 mb-8">
            <label className="m-2 font-bold">Chef</label>
            <br />
            <input
              className="input w-full"
              type="text"
              name="chef"
              defaultValue={chef}
              placeholder="Enter the chef of coffee"
              required
            />
          </div>
        </div>
        <div className="flex mx-auto ">
          {/* supplier and taste section */}

          <div className="w-1/2 mb-8 mr-5">
            <label className="m-2 font-bold">Supplier</label>
            <br />
            <input
              className="input w-full"
              type="text"
              defaultValue={supplier}
              name="supplier"
              placeholder="Enter your supplier"
              required
            />
          </div>
          <div className="w-1/2 mb-8">
            <label className="m-2 font-bold">Taste</label>
            <br />
            <input
              className="input w-full"
              type="text"
              defaultValue={taste}
              name="taste"
              placeholder="Enter your taste"
              required
            />
          </div>
        </div>
        <div className="flex mx-auto ">
          {/* category and detail section */}

          <div className="w-1/2 mb-8 mr-5">
            <label className="m-2 font-bold">Category</label>
            <br />
            <input
              className="input w-full"
              type="text"
              defaultValue={category}
              name="category"
              placeholder="Enter your category"
              required
            />
          </div>
          <div className="w-1/2 mb-8">
            <label className="m-2 font-bold">Details</label>
            <br />
            <input
              className="input w-full"
              type="text"
              name="detail"
              defaultValue={detail}
              placeholder="Enter your detail"
              required
            />
          </div>
        </div>
        <div className="flex mx-auto ">
          {/* Photo url  */}

          <div className="w-full mb-8 mr-5">
            <label className="m-2 font-bold">Photo URL</label>
            <br />
            <input
              className="input w-full"
              type="text"
              defaultValue={photo}
              name="photo"
              placeholder="Enter your photo url"
              required
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-amber-500 p-3 rounded-3xl mt-4"
          >
            Update a Coffee
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffiee;
