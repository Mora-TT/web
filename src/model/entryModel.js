import { Collection, getRepository } from 'fireorm';


@Collection()
class Entries {
  id: string;
  text: string;
  done: Boolean;
}

const EntriesRepository = getRepository(Entries);

const Entries = new Entries();
Entries.text = "Check fireorm's Github Repository";
Entries.done = false;

const EntriesDocument = await EntriesRepository.create(Entries); // Create Entries
const mySuperEntriesDocument = await EntriesRepository.findById(EntriesDocument.id); // Read Entries
await EntriesRepository.update(mySuperEntriesDocument); // Update Entries
await EntriesRepository.delete(mySuperEntriesDocument.id); // Delete Entries