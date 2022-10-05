var colors = prompt('Выберите цвет ("green","yellow", "red!"')

if (colors.toLocaleLowerCase() === 'red!') {
    console.log('stop!')
} else if (colors.toLocaleLowerCase() === 'green') {
    console.log('go!')
} else if (colors.toLocaleLowerCase() === 'yellow') {
    console.log('wait')
}
