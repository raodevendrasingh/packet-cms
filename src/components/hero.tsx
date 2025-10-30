import { QuillWrite01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export default function Hero() {
	return (
		<main className="overflow-hidden">
			<section className="relative mx-auto max-w-6xl">
				<div className="relative py-24 lg:py-28">
					<div className="mx-auto max-w-7xl px-6 md:px-12">
						<div className="text-center sm:mx-auto sm:w-10/12 lg:mt-0 lg:mr-auto lg:w-4/5">
							<h1 className="font-semibold text-4xl md:text-5xl xl:text-6xl xl:leading-[1.125]">
								Headless content <br /> delivered in packets
							</h1>

							<p className="mx-auto mt-6 max-w-2xl text-wrap text-lg text-muted-foreground">
								A fast, minimal CMS for publishing stories, product updates, and
								everything in between — made for the modern web.
							</p>

							<div className="mt-8">
								<Button asChild size="lg">
									<Link to="/dashboard">
										<HugeiconsIcon
											className="relative size-4"
											icon={QuillWrite01Icon}
											strokeWidth={2}
										/>
										<span className="text-nowrap">Start Writing</span>
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
