/**
 * @jest-environment jsdom
 */

import { pushToHistory } from "../scripts/router";

 describe('Test three states of pushToHistory', () => {
    test('settings state', () => {
      pushToHistory("settings", 0);
    //   console.log(window.location.hash);
    //   console.log(pushToHistory("setting", 0).state.pages);
      expect(window.location.hash).toBe("#settings");
    //   expect().toBe();
    //   console.log(history.length);
      expect(history.length).toBe(2);
    });


    test('entry state', () => {
        pushToHistory("entry", 3);
         console.log(window.location.hash); 
        expect(history.length).toBe(3);
        expect(window.location.hash).toBe("#entry3");
      });


     test('default', () => {
       pushToHistory("default", 4);
       console.log(window.location.hash); 
       expect(history.length).toBe(4);
       expect(window.location.hash).toBe("");
      });
  
  });
