<script>
    let {data} = $props();
</script>

<h2>My blog contents page</h2>

<nav>

    {#each data.posts as posts}
        <a href="/blog/{posts.title}">{posts.title}</a>
    {/each}

</nav>

<style>
    nav{
        display: flex;
        flex-direction: column;
    }
</style>