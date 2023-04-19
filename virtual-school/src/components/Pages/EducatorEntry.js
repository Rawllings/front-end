import React from "react";
import Dashboard from "./Dashboard";
import aboutImg from '../images/hero-bcg-4.jpg'
import styled from 'styled-components';


function EducatorEntry() {
    const dashboardItems = [
        {
            path: "/admin/school",
            name: "Add School",
            d: "M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z",

        },
        {
            path: "",
            name: "Add Educator",
            d: "M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z",
        },
        {
            path: "/admin/student",
            name: "Add Student",
            d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10",
        },
        {
            path: "/admin/course",
            name: "Add Course",
            d: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
        },
        {
            path: "/admin/class",
            name: "View Classes",
            d: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
        },
    ];
    return (
        <>
            <div>

                <Dashboard dashboardItems={dashboardItems} />
                <div className="bg-orange-400 absolute top-0 w- h-20" style={{ left: 200 }}>
                    {/* <div className="container mx-auto flex items-center justify-between px-4 py-3"> */}
                    <div className=" text-4xl xl:font-bold font-weight: 600 px-20 py-5">
                        Administrator
                    </div>

                    <Wrapper className='page relative section section-center px-5 py-20'>
                        <img src={aboutImg} alt='nice desk' />
                        <article>
                            <div className="title">
                                <h2 className="text-2xl font-bold">Add Educator</h2>
                                <div className="w-16 h-1 bg-gray-700"></div>
                            </div>

                            <div className="flex justify-center items-center h-screen">
                                <form className="bg-white shadow-md rounded px-8 pt-0 pb-8 mb-60 w-1/2">
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                            Name
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="name"
                                            type="text"
                                            name="name"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                            Email
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="email"
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                                            Password
                                        </label>
                                        <input
                                            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                            id="password"
                                            type="password"
                                            name="password"
                                            placeholder="Enter your password"
                                        />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <button
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                            type="submit"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </article>
                    </Wrapper>


                </div>
            </div>
        </>)

}


const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default EducatorEntry;
