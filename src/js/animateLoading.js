import {gsap} from "gsap";
import {SplitText} from "gsap/SplitText";
import TextPlugin from "gsap/TextPlugin";

export default function animateLoading(item) {
    let i = 0
    setTimeout(() => {
        item.classList.remove('opacity-0')
        const loadInterval = setInterval(() => {
            i = i + 10
            item.innerText = i + '%'
            if (i >= 100) {
                clearInterval(loadInterval)
            }
        }, 300)
    }, 500)

    setTimeout(() => {
        gsap.registerPlugin(SplitText, TextPlugin)
        const split = new SplitText(item, {type: 'chars', reduceWhiteSpace: false})
        split.chars.forEach((chars, key) => {
            if (key !== 2) {
                gsap.to(chars, {
                    opacity: 0,
                    duration: 1,
                    ease: 'power4.inOut',
                    delay: key * 0.03,
                    onComplete: () => {
                        if (key === split.chars.length - 1) {
                            gsap.to(chars, {
                                text: 't0 N0ve Fest',
                                opacity: 1,
                                duration: 1.2,
                                ease: 'power4.inOut',
                            })
                            gsap.to(item, {
                                duration: 1.2,
                                ease: 'power4.inOut',
                                x: -(split.chars[0].clientWidth + split.chars[1].clientWidth),
                                onComplete: () => {
                                    item.style.transform = 'translate(0, 0)'
                                    split.chars[0].remove()
                                    split.chars[1].remove()
                                }
                            })
                        }
                    }
                })
            }
        })
    }, 4500)

}