/**
 * clase article donde tenemos los metodos principales pedidos en el guion
 */
export class Article {
    constructor(private heading: string, private author: string[], private mail: string[], private keywords: string[], private resume: string, private publicationDate: string, private editorial: string, private quotes: number) {}

    //getters
    public getHeading() {
      return this.heading;
    }
  
    public getAuthor() {
      return this.author;
    }
  
    public getMail() {
      return this.mail;
    }
  
    public getKeywords() {
      return this.keywords;
    }
  
    public getResume() {
      return this.resume;
    }
  
    public getPublicationDate() {
      return this.publicationDate;
    }
  
    public getEditorial() {
      return this.publicationDate;
    }
  
    public getQuotes() {
      return this.quotes;
    }
  
    //setters
    public setHeading(heading: string) {
      this.heading = heading;
    }
  
    public setAuthor(author: string) {
      this.author.push(author);
    }
  
    public setMail(mail: string) {
      this.mail.push(mail);
    }
  
    public setKeywords(keywords: string) {
      this.keywords.push(keywords);
    }
  
    public setResume(resume: string) {
      this.resume = resume;
    }
  
    public setPublicationDate(publicationDate: string) {
      this.publicationDate = publicationDate;
    }
  
    public setEditorial(editorial: string) {
      this.editorial = editorial;
    }
  
    public setQuotes(quotes: number) {
      this.quotes = quotes;
    }
    /**
     * funcion donde transformamos a referencia APA
     * @returns 
     */
    public referenceAPA() {
      let reference: string = "";
      let aux = 0;
      this.author.forEach((author) => { //para recorrer vectores uno a uno
        if (aux == 0) {
          reference = author;
        }
        if (aux > 0) {
          if (aux == this.author.length - 1) {
            reference = reference + ' y ' + author + '.';
          } else {
            reference = reference + ', ' + author + '.';
          }
        }
        aux++;
      });
      reference = reference + ' (' + this.publicationDate + '). ' + this.heading + '. ' + this.editorial + '.';
      return reference;
    }

}