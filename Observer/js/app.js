const model = new NumberModel();
const elementObs = new ElementObserver("elementObserver1");
const consoleObs = new ConsoleObserver();
const historyObs = new HistoryObserver();

model.addObserver(elementObs);
model.addObserver(consoleObs);
model.addObserver(historyObs);

model.notifyObservers();