import React from 'react';
import fetch from 'node-fetch';
import Layout from '../components/MyLayout';
import Link from 'next/link';


export default function Index({students}) {
    return (
        <Layout>
            <h1>Student List</h1>
            <ul>
                {
                    students && students.map(({student_id, name}) => (
                        <li key={student_id}>
                            <Link href="/student/[id]" as={`/student/${student_id}`}>
                                <a>{name}</a>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </Layout>
    );
}

export async function getServerSideProps() {
    // Call an external API endpoint to get posts.
    const res = await fetch('https://apingweb.com/api/rest/students');
    const json = await res.json();

    return {
        props: {
            students: json.data,
        },
    }
}
