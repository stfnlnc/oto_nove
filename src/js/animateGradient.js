export default function animateGradient(gradients) {
    gradients.forEach((gradient, key) => {
        let delay;
        let randomFactor
        delay = Math.random() * (1500 - 200) + 200
        randomFactor = Math.random() * 1000 - 200
        delay += randomFactor
        delay = Math.max(50, delay)

        setTimeout(() => {
            gradient.classList.remove('translate-y-full')
        }, delay)

        gradient.addEventListener('mouseenter', () => {
            if (key > 0) {
                setTimeout(() => {
                    gradients[key - 1].style.transform = 'translateY(-50%)'
                }, 300)
            }
            gradient.style.transform = 'translateY(-50%)'
            if (key < gradients.length - 1) {
                setTimeout(() => {
                    gradients[key + 1].style.transform = 'translateY(-50%)'
                }, 300)
            }
        })
        gradient.addEventListener('mouseout', () => {
            setTimeout(() => {
                if (key > 0) {
                    setTimeout(() => {
                        gradients[key - 1].style.transform = 'translateY(0)'
                    }, 300)
                }
                gradient.style.transform = 'translateY(0)'
                if (key < gradients.length - 1) {
                    setTimeout(() => {
                        gradients[key + 1].style.transform = 'translateY(0)'
                    }, 300)
                }
            }, 1500)
        })
    });
}