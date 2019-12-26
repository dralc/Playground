import { BehaviorSubject } from 'rxjs';

// ------ BehaviourSubject as a state manager ------
const map = new Map().set('a', 1).set('b',2); /*?*/
const state = new BehaviorSubject(map);

// In an observer
state.subscribe({
    next: v => {
        v
    }
});

state.next(map.set('a', 3).set('b', 4));

// In another observer elsewhere...
// It'll get the last state broadcast (stored in the state manager)
state.subscribe({
  next: v => {
      v
  }
});
