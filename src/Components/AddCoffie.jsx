import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
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

    fetch("http://localhost:5000/addCoffie", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "The coffee has been added successfully",
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
      <h2 className="text-4xl font-extrabold text-center mb-4">Add a Coffee</h2>
      <form onSubmit={handleAddCoffee}>
        <div className="flex mx-auto">
          {/* name and chef section */}

          <div className="w-1/2 mb-8 mr-5">
            <label className="m-2 font-bold">Name of coffee</label>
            <br />
            <input
              className="input w-full"
              type="text"
              name="name" defaultValue="Rumon islam"
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
              defaultValue='Give me some discount'
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
              defaultValue='my supplier is the best'
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
              defaultValue='Sweet'
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
              defaultValue='my category is the best'
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
              defaultValue='this is the best coffee in the world'
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
            Add Coffee
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
