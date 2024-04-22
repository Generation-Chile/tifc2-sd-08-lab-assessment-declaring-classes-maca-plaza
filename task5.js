export class Player {
  constructor(name, level = 1, experience = 0) {
    this.name = name;
    this.level = level;
    this.experience = experience;
    this.experienceForNextLevel = 100; // Puntos de experiencia requeridos para el próximo nivel
  }
    info () {
      console.log(`${this.name} has reached Level ${this.level}!`);
    }
    levelUp() {
      this.level++;
      this.experience = 0; // Reiniciar la experiencia después de subir de nivel
      console.log(`${this.name} leveled up to Level ${this.level}!`);
  }

  gainExperience(points) {
      this.experience += points;
      console.log(`${this.name} gained ${points} experience points.`);

      if (this.experience >= this.experienceForNextLevel) {
          this.levelUp(); // Subir de nivel si se alcanzan suficientes puntos de experiencia
      }
  }
}
    
    
  

  