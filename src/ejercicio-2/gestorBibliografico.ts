import {Article} from './articulo';

/**
 * clase donde vamos a manejar el gestor bibliografico
 */
export class BibliographicManager {
  constructor(private articles: Article[]) {}

  //getters
  public getArticles() {
    return this.articles;
  }

  //setters
  public setArticle(articles: Article) {
    this.articles.push(articles);
  }

  /**
   * funcion donde mostramos en formato tabla los articulos
   */
  public showArticlesOnTable() {
    console.log(this.articles);
  }

  /**
   * 
   * @param keywords funcion donde hacemos la busqueda de los articulos de sistintas maneras
   * @param filter 
   * @returns 
   */
  public searchArticles(keywords: string[], filter: string) {

    const auxNum: number[] = [];
    const auxArray1: Article[] = [];
    const auxArray2: string[] = [];

    for (let i: number = 0; i < keywords.length; i++) {
      for (let j: number = 0; j < this.articles.length; j++) {
        for (let t: number = 0; t < filter.length; t++) {
          if (filter[t] == 'keywords') {
            for (let z: number = 0; z < this.articles[j].getKeywords().length; z++) {
              if (this.articles[j].getKeywords()[z] == keywords[i]) {
                auxNum.push(j);
              }
            }
          }
          if (filter[t] == 'author') {
            for (let z: number = 0; z < this.articles[j].getAuthor().length; z++) {
              if (this.articles[j].getAuthor()[z] == keywords[i]) {
                auxNum.push(j);
              }
            }
          }
          if (filter[t] == 'date') {
            if (this.articles[j].getPublicationDate() == keywords[i]) {
              auxNum.push(j);
            }
          }
          if (filter[t] == 'editorial') {
            if (this.articles[j].getEditorial() == keywords[i]) {
              auxNum.push(j);
            }
          }
        }
      }
    }
    for (let i = auxNum.length - 1; i >= 0; i--) {
      if (auxNum.indexOf(auxNum[i]) !== i) auxNum.splice(i, 1);
    }

    while (auxNum.length > 0) {
      auxArray1.push(this.articles[auxNum[0]]);
      auxNum.shift();
    }
    for (let i: number = 0; i < auxArray1.length; i++) {
      auxArray2.push(auxArray1[i].referenceAPA());
      console.log(auxArray2[i]);
    }
    return auxArray2;
  }
}