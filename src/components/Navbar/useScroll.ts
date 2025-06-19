const useScroll = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        console.log(`Scrolling to section: ${sectionId}`, element);
        if (element) {
            const navbarHeight = 64; // 4rem or h-16
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return { scrollToSection }
}

export default useScroll