/**
 * Replaces all occurrences of the pattern `img:<url>` in the given text
 * with an `<img>` tag pointing to the given URL.
 *
 * @param {string} text The text to process
 * @returns The processed text with the replaced `<img>` tags
 */

export const processHtml = (text: string) => {
  // Regex to match img:"<url>"
  const imgRegex = /img:([^"]+)/g;

  // Replace the matched pattern with an <img> tag
  const updatedHtml = text.replace(imgRegex, (_, url) => {
    return `<img src="${url}" alt="dynamic-image" style="max-width: 100%; height: auto; display: block;" />`;
  });

  return updatedHtml;
};

// Process the text to replace the img pattern
