import { ToastContainer, toast } from "react-toastify";

const addToDB = (job) => {
    const id = job.id;  
    let jobsCart = {};

    
    // Get previous cart data from local storage
    const storeCart = localStorage.getItem("jobs-cart");
    if (storeCart) {
        jobsCart = JSON.parse(storeCart);
    }
    
    // Check if item already exists
    if (jobsCart[id]) {
        toast.warning("Already Applied This Job");
        return;
    }
    
    // Add new item to cart
    jobsCart[id] = job;
    
    // Save updated cart to local storage
    localStorage.setItem("jobs-cart", JSON.stringify(jobsCart));
  
    // Show success message
    toast.success("Applied Successfully");
  };

export { addToDB };
