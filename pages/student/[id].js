import fetch from 'node-fetch';
import Layout from '../../components/MyLayout';

export default function Employee({student}) {

    return (
        <Layout>
            {
                student
                    ? (
                        <>
                            <h1>{student.name}</h1>
                            <p>Student Age: {student.age}</p>
                            <p>Student Email: {student.email}</p>
                        </>
                    )
                    : (
                        <>
                            <h1>Employee Not Found</h1>
                        </>
                    )
            }
        </Layout>
    );
};

export async function getServerSideProps({query: {id}}) {

    const endpoint = `https://apingweb.com/api/rest/student/${id}`;

    // Call an external API endpoint to get posts.
    const res = await fetch(endpoint);
    const json = await res.json();

    return {
        props: {
            student: json && json.data && json.data.length ? json.data[0] : null,
        },
    }
}
