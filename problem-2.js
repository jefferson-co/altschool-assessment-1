// Problem 2 - Object Diff

function diffObjects(oldObj, newObj) {
  const added = {}
  const removed = {}
  const changed = {}

  for (const key in newObj) {
    if (!Object.hasOwn(oldObj, key)) {
      added[key] = newObj[key]
    } else if (oldObj[key] !== newObj[key]) {
      changed[key] = { from: oldObj[key], to: newObj[key] }
    }
  }

  for (const key in oldObj) {
    if (!Object.hasOwn(newObj, key)) {
      removed[key] = oldObj[key]
    }
  }

  return { added, removed, changed }
}

console.log(diffObjects(
  { name: 'Setemi', role: 'Engineer', country: 'Jamaica' },
  { name: 'Setemi', role: 'Senior Engineer', city: 'Kingston' }
))
