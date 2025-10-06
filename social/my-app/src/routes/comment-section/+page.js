export async function load({fetch}) {
    const res = await fetch ("https://jsonplaceholder.typicode.com/posts");
    const comments = await res.json();
    return {comments};
}