// function shoot(shootingPosition1, shootingPosition2, shootingPosition3, shootingPosition4, shootingPosition5, shootingPosition6, shootingPosition7, shootingPosition8, shootingPosition9, shootingPosition10) {
function shoot(shootingPosition1, shootingPosition2) {
    let arr = [shootingPosition1, shootingPosition2]
    let players = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    let container = [], result = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < players.length; j++) {
            if (arr[i][0] == players[j]) {
                container.push(j)
            }
        }
        if (arr[i].length > 2) {
            container.push(10)
        } else {
            container.push(arr[i][1] * 1)
        }
        result.push(container)
        container = [] 
    }
    return result
}

console.log(shoot(process.argv[2], process.argv[3]))