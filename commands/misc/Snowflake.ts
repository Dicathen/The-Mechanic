/** A uniquely identifiable descriptor of a thing in Discord. */
class Snowflake {
  /** The Discord epoch (the first millisecond of 2015). */
  public static EPOCH = 1420070400000;

  /**
   * Creates a snowflake.
   * @param value The unsigned 64-bit integer that represents the snowflake.
   */
  public constructor(value: string | number | bigint) {
    this.value = BigInt(value);
  }

  /**
   * Creates a snowflake from a date.
   * @param date The date.
   * @returns The snowflake.
   */
  public static fromDate(date: Date): Snowflake {
    return new Snowflake(`0b${
      BigInt(date.getTime() - Snowflake.EPOCH) // Translate the date by the Discord epoch.
        .toString(2) // Convert the date to binary.
        .padStart(0x2a, "0") // Pad the start until the timestamp is the correct length.
        .padEnd(0x40, "0") // Pad the end until the snowflake is the correct length.
    }`);
  }

  /** The increment value of this snowflake. */
  public get increment(): number {
    return Number(this.value & 0xfffn);
  }

  /** The process value of this snowflake. */
  public get process(): number {
    return Number((this.value & 0x1f000n) >> 12n);
  }

  /** The timestamp value of this snowflake. */
  public get timestamp(): Date {
    return new Date(Number((this.value >> 22n) + BigInt(Snowflake.EPOCH)));
  }

  public readonly value: bigint;

  /** The worker value of this snowflake. */
  public get worker(): number {
    return Number((this.value & 0x3e0000n) >> 17n);
  }

  /** Converts this snowflake to a string. */
  public toString(): string {
    return this.value.toString();
  }
}
