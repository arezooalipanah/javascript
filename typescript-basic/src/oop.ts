class Account {
  nickname?: string;

  constructor(
    public readonly id: number,
    public name: string,
    private _balance: number
  ) {}

  deposite(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }
    this._balance += amount;
  }

  getBalance(): number {
    return this._balance;
  }

  //   or

  get balance(): number {
    return this._balance;
  }

  set balance(value: number) {
    if (value < 0) {
      throw new Error("Invalid number");
    }

    this._balance = value;
  }

  //   private calacTax(): void {
  //     console.log("calc");
  //   }
}

let account = new Account(1, "arezoo", 0);
account.deposite(30);
console.log(account.getBalance());
console.log(account.balance);
account.balance = 1;
console.log(account.balance);

// index singnature property
class SeatAssignment {
  // index singnature property
  [seatNumber: string]: string;
}

let seat = new SeatAssignment();
seat.A1 = "Arezoo";
seat["Al"] = "Arezoo";
seat.A2 = "alipanah";

class Ride {
  private static _activeRides: number = 0;
  start() {
    Ride._activeRides++;
  }
  stop() {
    Ride._activeRides--;
  }

  static get activeRides(): number {
    return Ride._activeRides;
  }
}

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

console.log(Ride.activeRides);
