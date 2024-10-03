<script>
	import ProjectCard from '$lib/ProjectCard.svelte';
</script>

<div class=" my-8 flex min-h-[80vh] w-full max-w-4xl flex-col items-center gap-4 px-6">
	<h2 class=" text-5xl font-extrabold uppercase tracking-wider text-primary-600">My Projects</h2>
	<div class=" mt-6 flex flex-wrap items-center justify-center gap-6">
		<ProjectCard
			desc="A Website for a Restaurant in Dubai, fully optimized for SEO and for the web. Built using
		Sveltekit, styled with TailwindCSS, and deployed Vercel."
			title="HBH - Restaurant Website"
			src="/hbh.webp"
			alt="HBH Website Homepage"
			href="https://hbhdubai.com"
		/>
		<!-- Toks News -->
		<ProjectCard
			desc="A news aggregator built using NextJs, GraphQL with StepZen using the NewsAPI. "
			title="Toks News"
			src="/news.webp"
			alt="The Toks News Homepage"
			gitLink="https://github.com/rtokala14/news-app"
			href="https://news.tokala.dev"
		/>
		<!-- Note-ify -->
		<ProjectCard
			desc="An SPA created with React, using Firebase as the backend for the database and User Management."
			title="Noteify - A Note Taking App"
			src="/notes.webp"
			alt="Noteify Website Homepage"
			gitLink="https://github.com/rtokala14/firebase-notetaking"
			href="https://noteify.tokala.dev"
		/>
		<ProjectCard
			desc="A Twitter-like app built with NextJs Server components, Server Actions, and MySQL as the DB"
			title="Ribbit - Twitter Clone"
			src="/ribbit.webp"
			alt="Ribbit Homepage"
			gitLink="https://github.com/rtokala14/ribbit"
		/>
	</div>
</div>
