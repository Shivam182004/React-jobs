import Hero from "../components/Hero"
import HomeCard from "../components/HomeCard"
import JobListing from "../components/JobListing"
import ViewJobs from "../components/ViewJobs"


const HomePage = () => {
  return (
    <>
    <Hero/>
    <HomeCard/>
    <JobListing isHome = {true}/>
    <ViewJobs/>

    </>
  )
}

export default HomePage