import { 
Route,
RouterProvider,
createBrowserRouter,
createRoutesFromElements,
}from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";
import JobsPage from "./pages/JobsPage";
import AddJobPage from "./pages/AddJobPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, {jobLoader} from "./pages/JobPage";
import EditJobPage from "./pages/EditJobPage";



const App = () => {
  // Adding the job.
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  };
  
  //Deleting the job.
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  };

  // Update Job
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  };
    
    const router = createBrowserRouter(
      createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/jobs" element={<JobsPage deleteJob={deleteJob}/>}/>
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob}/>}/>
        <Route
          path='/edit-job/:id'
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route path="/jobs/:id" element={<JobPage/>} loader={jobLoader}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Route>
      )
    );
  return (
   <RouterProvider router={router}/>
  );
}

export default App