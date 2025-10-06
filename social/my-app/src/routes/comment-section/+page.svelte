<script>
    import Comment from "$lib/components/Comment.svelte";
    let {data} = $props();
</script>

{#each data.comments as comment}
<Comment commentData = {comment} />    
{/each}