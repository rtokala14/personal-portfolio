<script>
	import { Card } from 'svelte-5-ui-lib';
</script>

<div class=" mt-8 flex h-[80vh] w-full max-w-4xl flex-col items-center gap-4 px-6">
	<h2 class=" mb-6 text-5xl font-extrabold uppercase tracking-wider text-primary-600">
		Contact Me
	</h2>
	<Card>
		<h3 class=" underline-offset-3 text-2xl font-semibold underline">Get in touch with me!</h3>
		<div class=" mt-4 flex w-full flex-col gap-4">
			<p>Email: <a href="mailto:rohit@tokala.dev" class="hover:underline">rohit@tokala.dev</a></p>
			<p>
				LinkedIn: <a href="https://linkedin.com/in/rohit-tokala" class="hover:underline"
					>rohit-tokala</a
				>
			</p>
			<p>X: <a href="https://x.com/TokalaRohit" class="hover:underline">@TokalaRohit</a></p>
		</div>
	</Card>
</div>
