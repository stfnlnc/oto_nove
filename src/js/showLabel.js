export function showLabel(labels) {
    labels.forEach(label => {
        label.addEventListener('mouseenter', () => {
            const newLabel = document.createElement("div");
            newLabel.innerHTML = label.dataset.name;
            newLabel.classList.add(
                'px-[0.62vw]', 'fixed', 'z-500', 'bg-white', 'rounded-[0.375rem]',
                'uppercase', 'text-[1.25vw]', 'border', 'pointer-events-none'
            );
            newLabel.classList.add('new-label');
            document.body.appendChild(newLabel);

            const updatePosition = (e) => {
                newLabel.style.top = e.pageY - 10 + "px";
                newLabel.style.left = e.pageX - 10 + "px";
            };

            label.addEventListener('mousemove', updatePosition);

            label.addEventListener('mouseleave', () => {
                label.removeEventListener('mousemove', updatePosition);
                newLabel.remove();
            }, {once: true});
        });
    })
}