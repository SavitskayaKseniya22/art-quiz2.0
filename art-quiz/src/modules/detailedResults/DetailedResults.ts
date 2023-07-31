import { ImageType } from "../../interfaces";
import { fetchImagesPack } from "../../utils";
import "./detailedResults.scss";

class DetailedResults {
  static async setDetailedResults(imageList: ImageType[], results: boolean[]) {
    const urls = await fetchImagesPack(imageList);
    return DetailedResults.createCategoryList(imageList, results, urls);
  }

  static createCategory(image: ImageType, isItCorrect: boolean, url: string) {
    const { author, name, year, full } = image;
    return `<li class="results__item">
  <img src="${url}" ${!isItCorrect ? `class="results__item_img-wrong"` : ""} />
  <div class="results__item_content">
    <h3>"${name}"</h3>
    <p>${author}</p>
    <span>${year}</span>
  </div>
  <a class="results__item_link-to-full" target="_blank" href="${full}" title="Open full image in a new tab" data-i18n="[title]results.tips.full">
    <i class='bx bx-link-external'></i>
  </a>
</li>`;
  }

  static createCategoryList(imageList: ImageType[], results: boolean[], urls: string[]) {
    return `<ul class="results">
    ${imageList
      .map((image, index) => {
        return DetailedResults.createCategory(image, results[index], urls[index]);
      })
      .join(" ")}
    </ul>`;
  }
}

export default DetailedResults;
