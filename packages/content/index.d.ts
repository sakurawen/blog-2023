declare module '@packages/content' {
  var data: {
    list: Array<{
      year: string;
      list: Array<{
        title: string;
        date: string;
        fmtDate: string;
        key: string;
      }>;
    }>;
    map: Record<
      string,
      {
        filePath: string;
        title: string;
        date: string;
        fmtDate: string;
        key: string;
      }
    >;
  };
  export default data;
}
