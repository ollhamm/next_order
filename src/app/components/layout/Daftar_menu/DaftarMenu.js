export default function DaftarMenu() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white transition-all hover:shadow-2xl hover:shadow-black/30">
      <div className="text-center">
        <img
          className="rounded-full max-h-[150px] items-center block mx-auto"
          src="/nasi-kuning.png"
          alt="nasi kuning"
        />
      </div>
      <h4 className="font-semibold my-3">Nasi Kuning</h4>
      <p className="text-gray-500 text-sm">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <button className=" bg-hijau text-white rounded-full px-6 py-2 mt-4">
        Add to card $1
      </button>
    </div>
  );
}
