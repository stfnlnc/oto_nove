import {gsap} from "gsap";

export default function menu(columns, items) {

    let toggle = []
    for (let i = 0; i < 17; i++) {
        toggle[i] = false
    }

    columns.forEach((column, key) => {
        if (key > 12) {
            column.addEventListener('click', () => {
                toggle[key] = !toggle[key]
                gsap.to(column, {
                    x: toggle[key] ? '-' + (column.offsetLeft - (column.offsetWidth * (key - 12))) + 'px' : '0',
                    duration: 0.5,
                })
                gsap.to(items[key], {
                    x: toggle[key] ? '-' + (column.offsetLeft - (column.offsetWidth * (key - 12))) + 'px' : '0',
                    duration: 0.5,
                })
                columns.forEach((col, k) => {
                    if (k < key && k > 0) {
                        gsap.to(items[k], {
                            x: toggle[key] ? '-' + (column.offsetLeft - (column.offsetWidth * (key - 12))) + 'px' : '0',
                            duration: 0.5,
                        })
                        gsap.to(col, {
                            x: toggle[key] ? '-' + (column.offsetLeft - (column.offsetWidth * (key - 12))) + 'px' : '0',
                            duration: 0.5,
                        })
                    }
                })
            })
        }
    })

}