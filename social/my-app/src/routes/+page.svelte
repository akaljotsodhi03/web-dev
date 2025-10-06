<script>
    import Post from '$lib/components/post.svelte';
    let posts = [
        {
            username:"Doug321",
            avatar: "https://avatar.iran.liara.run/public",
            postDate: "02-08-2025",
            postText: "blah",
            likes: 34
        }
    ];
</script>
{#each posts as post}
    <Post postData={post} />
{/each}

<style>
    :global(body){
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
</style>
