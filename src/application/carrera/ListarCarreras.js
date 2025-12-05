class ListarCarreras {
  constructor(repoCarrera) {
    this.repo = repoCarrera;
  }

  async ejecutar() {
    return await this.repo.findAll();
  }
}

module.exports = ListarCarreras;