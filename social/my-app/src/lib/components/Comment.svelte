<script>
    let {commentData} = $props();
</script>

<section>
    <h3>{commentData.title}</h3>
    <p>{commentData.body}</p>
</section>

<style>
    section{
        border: 1px solid #ccc;
        background-color: #eee;
        border-radius: 0.8em;
        padding: 1em;
    }
</style>