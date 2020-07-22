import '../js/intersection-observer';
import '../scss/index.scss';

window.addEventListener('load', startObserve);

function startObserve() {
  // 見えている量が閾値を上回るか下回ったときに呼ばれる
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio === 1) {
        // 100%見えなくなったとき
        entry.target.classList.add('active');
      } else if (!entry.isIntersecting) {
        // 見えている領域が20%を下回ったとき
        entry.target.classList.remove('active');
      }
    });
  };

  const option = {
    // 20%と100％の閾値
    threshold: [0.2, 1.0]
  };

  const observer = new IntersectionObserver(callback, option);
  const target = document.querySelector('#second');
  observer.observe(target);
}

/**
 * スクロールアニメーション
 * IE11はpolyfill必要
 */

function promiseTest(age: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (age >= 20) {
      resolve('OK');
    } else {
      reject('NG');
    }
  });
}

promiseTest(19)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

/**
 * genericsテスト
 */
function geneTest<T>(arg: T): T {
  return arg;
}

geneTest<string>('hoge');

function helloWorld(text: string): string {
  return text;
}

helloWorld('こんにちは');

// IntersectionObserver APIを使用して要素の交差を検知してアニメーション
