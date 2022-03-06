// Your code here
class BattleShip {
    constructor(shootingPosition1, shootingPosition2, shootingPosition3, shootingPosition4, shootingPosition5, shootingPosition6, shootingPosition7, shootingPosition8, shootingPosition9, shootingPosition10) {
        this.players = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
        this.destroyerDirection = ''
        this.cruiserDirection = ''
        this.battleshipDirection = ''
        this.aircraftCarrierDirection = ''
        this.getDestroyerDirection()
        this.getBattleshipDirection()
        this.getCruiserDirection()
        this.getAircraftCarrierDirection()
        this.destroyerCoordinates = []
        this.cruiserCoordinates = []
        this.battleshipCoordinates = []
        this.aircraftCarrierCoordinates = []
        this.shootingCoordinates = []
        this.hitCoordinates = []
        this.getAllPosition()
        this.getHit()
        this.field()
        this.shoot(shootingPosition1, shootingPosition2, shootingPosition3, shootingPosition4, shootingPosition5, shootingPosition6, shootingPosition7, shootingPosition8, shootingPosition9, shootingPosition10)
    }
    
    field() {
        let container = '', activate = true, shooting = false, hit = false
        for (let j = 0; j <= 21; j++) {
            for (let i = 0; i < 10; i++) {
                if (j == 0 && i == 0) {
                    container += `      ${this.players[i]}`
                } else if (j == 0 && i == 9) {
                    container += `     ${this.players[i]}\n`
                } else if (j == 0) {
                    container += `     ${this.players[i]}`
                }

                if ((j == 1 || j == 21) && i == 0) {
                    container += `   +------`
                } else if ((j == 1 || j == 21) && i == 9) {
                    container += `-----+ \n`
                } else if (j == 1 || j == 21) {
                    container += `------`
                }

                if (j == 20 && i == 0) {
                    container += `${(j / 2)} `
                } else if (j !== 0 && j % 2 == 0 && i == 0) {
                    container += `${(j / 2)}  `
                } 

                if (j !== 0 && j % 2 == 0 && i == 0) {
                    container += `|`
                }

                // hit
                for (let k = 0; k < this.hitCoordinates.length; k++) {
                    if (j == this.hitCoordinates[k][0] && i == this.hitCoordinates[k][1]) {
                        hit = true
                        shooting = true
                        activate = true
                        container += `  x  |`
                    }
                }

                // shoot
                for (let k = 0; k < this.shootingCoordinates.length; k++) {
                    if (!hit && j == this.shootingCoordinates[k][0] && i == this.shootingCoordinates[k][1]) {
                        shooting = true
                        activate = true
                        container += `  O  |`
                    }
                }

                // destroyer
                for (let k = 0; k < this.destroyerCoordinates.length; k++) {
                    if (!shooting && j == this.destroyerCoordinates[k][0] && i == this.destroyerCoordinates[k][1]) {
                        activate = true
                        container += `  D  |`
                    }
                }

                // cruiser
                for (let k = 0; k < this.cruiserCoordinates.length; k++) {
                    if (!shooting && j == this.cruiserCoordinates[k][0] && i == this.cruiserCoordinates[k][1]) {
                        activate = true
                        container += `  C  |`
                    }
                }
                
                // battleship
                for (let k = 0; k < this.battleshipCoordinates.length; k++) {
                    if (!shooting && j == this.battleshipCoordinates[k][0] && i == this.battleshipCoordinates[k][1]) {
                        activate = true
                        container += `  B  |`
                    }
                }

                // aircraft carrier
                for (let k = 0; k < this.aircraftCarrierCoordinates.length; k++) {
                    if (!shooting && j == this.aircraftCarrierCoordinates[k][0] && i == this.aircraftCarrierCoordinates[k][1]) {
                        activate = true
                        container += `  A  |`
                    }
                }

                if (!activate && j !== 0 && j % 2 == 0) {
                    container += `     |` 
                }

                if (j !== 0 && j % 2 == 0 && i == 9) {
                    container += `\n`
                }

                if (j !== 1 && j !== 21 && j % 2 == 1 && i == 0) {
                    container += `   |-----|`
                } else if (j !== 1 && j !== 21 && j % 2 == 1 && i == 9) {
                    container += `-----|\n`
                } else if (j !== 1 && j !== 21 && j % 2 == 1) {
                    container += `-----|`
                }

                activate = false
                shooting = false
                hit = false
            }    
        }
        return container
    }

    getHit () {
        for (let i = 0; i < this.shootingCoordinates.length; i++) {
            for (let j = 0;j < this.destroyerCoordinates.length; j++) {
                if (this.shootingCoordinates[i][0] == this.destroyerCoordinates[j][0] && this.shootingCoordinates[i][1] == this.destroyerCoordinates[j][1]) {
                    this.hitCoordinates.push(this.shootingCoordinates[i])
                }
            }
        }

        for (let i = 0; i < this.shootingCoordinates.length; i++) {
            for (let j = 0;j < this.cruiserCoordinates.length; j++) {
                if (this.shootingCoordinates[i][0] == this.cruiserCoordinates[j][0] && this.shootingCoordinates[i][1] == this.cruiserCoordinates[j][1]) {
                    this.hitCoordinates.push(this.shootingCoordinates[i])
                }
            }
        }

        for (let i = 0; i < this.shootingCoordinates.length; i++) {
            for (let j = 0;j < this.battleshipCoordinates.length; j++) {
                if (this.shootingCoordinates[i][0] == this.battleshipCoordinates[j][0] && this.shootingCoordinates[i][1] == this.battleshipCoordinates[j][1]) {
                    this.hitCoordinates.push(this.shootingCoordinates[i])
                }
            }
        }

        for (let i = 0; i < this.shootingCoordinates.length; i++) {
            for (let j = 0;j < this.aircraftCarrierCoordinates.length; j++) {
                if (this.shootingCoordinates[i][0] == this.aircraftCarrierCoordinates[j][0] && this.shootingCoordinates[i][1] == this.aircraftCarrierCoordinates[j][1]) {
                    this.hitCoordinates.push(this.shootingCoordinates[i])
                }
            }
        }
        return this
    }

    shoot(shootingPosition1, shootingPosition2, shootingPosition3, shootingPosition4, shootingPosition5, shootingPosition6, shootingPosition7, shootingPosition8, shootingPosition9, shootingPosition10) {
        let arr = [shootingPosition1, shootingPosition2, shootingPosition3, shootingPosition4, shootingPosition5, shootingPosition6, shootingPosition7, shootingPosition8, shootingPosition9, shootingPosition10]
        let container = [], result = []
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].length > 2) {
                container.push(20)
            } else {
                container.push(2 * (arr[i][1] * 1))
            }
            for (let j = 0; j < this.players.length; j++) {
                if (arr[i][0] == this.players[j]) {
                    container.push(j)
                }
            }
            result.push(container)
            container = []  
        }
        this.shootingCoordinates = result
        // this.getHit()
    }

    getDestroyerDirection() {
        let random = Math.random()
        if (random > 0.5) {
            this.destroyerDirection = `horizontal`
        } else if (random <= 0.5) {
            this.destroyerDirection = `vertical`
        }
    }

    getCruiserDirection() {
        let random = Math.random()
        if (random > 0.5) {
            this.cruiserDirection = `horizontal`
        } else if (random <= 0.5) {
            this.cruiserDirection = `vertical`
        }
    }

    getBattleshipDirection() {
        let random = Math.random()
        if (random > 0.5) {
            this.battleshipDirection = `horizontal`
        } else if (random <= 0.5) {
            this.battleshipDirection = `vertical`
        }
    }

    getAircraftCarrierDirection() {
        let random = Math.random()
        if (random > 0.5) {
            this.aircraftCarrierDirection = `horizontal`
        } else if (random <= 0.5) {
            this.aircraftCarrierDirection = `vertical`
        }
    }

    position() {
        let random = Math.ceil(Math.random() * 10)
        return random
    }

    destroyerPosition () {
        let container = [], ngecek = true, result = []
        while (ngecek) {
            container = [this.position() * 2, this.position() - 1]
            if (this.destroyerDirection == 'horizontal') {
                if (container[1] < 9 && container[0] !== container[0][1]) {
                    ngecek = false
                }
            } else {
                if (container[0] < 20 && container[0] !== container[1]) {
                    ngecek = false
                }
            }
        }
        result.push(container)
        if (this.destroyerDirection == 'horizontal') {
            result.push([container[0], container[1] + 1])
        } else {
            result.push([container[0] + 2, container[1]])
        }
        return result
    }

    cruiserPosition () {
        let container = [], ngecek = true, result = []
        while (ngecek) {
            container = [this.position() * 2, this.position() - 1]
            if (this.cruiserDirection == 'horizontal') {
                if (container[1] < 8 && container[0] !== container[0][1]) {
                    ngecek = false
                }
            } else {
                if (container[0] < 18 && container[0] !== container[1]) {
                    ngecek = false
                }
            }
        }
        result.push(container)
        for (let i = 1; i <= 2; i++) {
            if (this.cruiserDirection == 'horizontal') {
                result.push([container[0], container[1] + i])
            } else {
                result.push([container[0] + (i*2), container[1]])
            }
        }
        return result
    }

    battleshipPosition () {
        let container = [], ngecek = true, result = []
        while (ngecek) {
            container = [this.position() * 2, this.position() - 1]
            if (this.battleshipDirection == 'horizontal') {
                if (container[1] < 7 && container[0] !== container[0][1]) {
                    ngecek = false
                }
            } else {
                if (container[0] < 16 && container[0] !== container[1]) {
                    ngecek = false
                }
            }
        }
        result.push(container)
        for (let i = 1; i <= 3; i++) {
            if (this.battleshipDirection == 'horizontal') {
                result.push([container[0], container[1] + i])
            } else {
                result.push([container[0] + (i*2), container[1]])
            }
        }
        return result
    }

    aircraftCarrierPosition () {
        let container = [], ngecek = true, result = []
        while (ngecek) {
            container = [this.position() * 2, this.position() - 1]
            if (this.aircraftCarrierDirection == 'horizontal') {
                if (container[1] < 6 && container[0] !== container[0][1]) {
                    ngecek = false
                }
            } else {
                if (container[0] < 14 && container[0] !== container[1]) {
                    ngecek = false
                }
            }
        }
        result.push(container)
        for (let i = 1; i <= 4; i++) {
            if (this.aircraftCarrierDirection == 'horizontal') {
                result.push([container[0], container[1] + i])
            } else {
                result.push([container[0] + (i*2), container[1]])
            }
        }
        return result
    }

    compareCruiserWithDestroyer () {
        let ngecek = false
        while (!ngecek) {
            ngecek = true

            // this.destroyerDirection = this.getDestroyerDirection()
            this.destroyerCoordinates = this.destroyerPosition()
            // this.cruiserDirection = this.getCruiserDirection()
            this.cruiserCoordinates = this.cruiserPosition()

            for (let i = 0; i < this.cruiserCoordinates.length; i++) {
                for (let j = 0; j < this.destroyerCoordinates.length; j++) {
                    if (this.cruiserCoordinates[i][0] == this.destroyerCoordinates[j][0] && this.cruiserCoordinates[i][1] == this.destroyerCoordinates[j][1]) {
                        ngecek = false
                    }
                }
            }
        }
        return this
    }

    compareBattleshipWithDestroyerAndCruiser() {
        let ngecek = false, i = 0
        while (!ngecek) {
            ngecek = true
  
            // this.battleshipDirection = this.getBattleshipDirection()
            this.battleshipCoordinates = this.battleshipPosition()

            // compare against cruiser
            for (let i = 0; i < this.battleshipCoordinates.length; i++) {
                for (let j = 0; j < this.cruiserCoordinates.length; j++) {
                    if (this.battleshipCoordinates[i][0] == this.cruiserCoordinates[j][0] && this.battleshipCoordinates[i][1] == this.cruiserCoordinates[j][1]) {
                        ngecek = false
                    }
                }
            }

            // compare against destroyer
            for (let i = 0; i < this.battleshipCoordinates.length; i++) {
                for (let j = 0; j < this.destroyerCoordinates.length; j++) {
                    if (this.battleshipCoordinates[i][0] == this.destroyerCoordinates[j][0] && this.battleshipCoordinates[i][1] == this.destroyerCoordinates[j][1]) {
                        ngecek = false
                    }
                }
            }
        }
        return this
    }

    compareAircraftCarrierWithAll() {
        let ngecek = false
        while (!ngecek) {
            ngecek = true
  
            // this.aircraftCarrierDirection = this.getAircraftCarrierDirection()
            this.aircraftCarrierCoordinates = this.aircraftCarrierPosition()

            // compare against battleship
            for (let i = 0; i < this.aircraftCarrierCoordinates.length; i++) {
                for (let j = 0; j < this.battleshipCoordinates.length; j++) {
                    if (this.aircraftCarrierCoordinates[i][0] == this.battleshipCoordinates[j][0] && this.aircraftCarrierCoordinates[i][1] == this.battleshipCoordinates[j][1]) {
                        ngecek = false
                    }
                }
            }

            // compare against cruiser
            for (let i = 0; i < this.aircraftCarrierCoordinates.length; i++) {
                for (let j = 0; j < this.cruiserCoordinates.length; j++) {
                    if (this.aircraftCarrierCoordinates[i][0] == this.cruiserCoordinates[j][0] && this.aircraftCarrierCoordinates[i][1] == this.cruiserCoordinates[j][1]) {
                        ngecek = false
                    }
                }
            }

            // compare against destroyer
            for (let i = 0; i < this.aircraftCarrierCoordinates.length; i++) {
                for (let j = 0; j < this.destroyerCoordinates.length; j++) {
                    if (this.aircraftCarrierCoordinates[i][0] == this.destroyerCoordinates[j][0] && this.aircraftCarrierCoordinates[i][1] == this.destroyerCoordinates[j][1]) {
                        ngecek = false
                    }
                }
            }
        }
        return this
    }

    getAllPosition () {
        this.compareCruiserWithDestroyer().compareBattleshipWithDestroyerAndCruiser().compareAircraftCarrierWithAll ()
        return this
    }
}

let battleShip = new BattleShip(process.argv[2], process.argv[3], process.argv[4], process.argv[5], process.argv[6], process.argv[7], process.argv[8], process.argv[9], process.argv[10], process.argv[11], process.argv[12])
// let battleShip = new BattleShip(process.argv[2])
// console.log(battleShip.compareCruiserWithDestroyer().compareBattleshipWithDestroyerAndCruiser())
// console.log(battleShip.compareBattleshipWithAircraftCarrier().field())
// console.log(battleShip.compareCruiserWithDestroyer().compareBattleshipWithDestroyerAndCruiser().field())
// console.log(battleShip)
console.log(battleShip.getHit().field())
// console.log(battleShip.field().hitCoordinates)
// console.log(battleShip.compareCruiserWithDestroyer().test().field())
// console.log(battleShip.aircraftCarrierPosition())