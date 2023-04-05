export let setNewIntersection = (selector: string, callback: Function, rootMargin?: string) => {

    const observer = new IntersectionObserver(
        async (entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting && entry.target) {
                    // What to do throuhg callback
                    try { callback(entry) } catch (error) { }
                    observer.unobserve(entry.target);
                }
            }
        },
        { threshold: 0, rootMargin: rootMargin || "0px 0px 300px 0px" }
    );
    const box = document.querySelector(selector) as HTMLElement;
    observer.observe(box);
}
