export default function animateMenu(items) {
    let i = 0
    setTimeout(() => {
        items.forEach((item, key) => {
            if (key === 0 || key > 12) {
                i++
                setTimeout(() => {
                    item.classList.remove('opacity-0')
                    item.classList.remove('translate-y-24')
                }, i * 300)
            }
        })
    }, 6500)
}