const CarreraTaxiModel = require('../models/CarreraTaxiModel');
const CarreraTaxi = require('../../domain/entities/CarreraTaxi');

class CarreraTaxiRepositoryMongo {

    // recibe objeto dominio o DTO; guarda en mongo
    async save(carreraDomain) {
        const data = this._toPersistence(carreraDomain);
        const created = await new CarreraTaxiModel(data).save();
        return this._toDomain(created);
    }

    async findAll() {
        const items = await CarreraTaxiModel.find();
        return items.map(d => this._toDomain(d));
    }

    async findById(idCarrera) {
        const doc = await CarreraTaxiModel.findOne({ idCarrera });
        return doc ? this._toDomain(doc) : null;
    }

    async update(idCarrera, carreraDomainOrObj) {
        const data = this._toPersistence(carreraDomainOrObj);
        const updated = await CarreraTaxiModel.findOneAndUpdate({ idCarrera }, data, { new: true });
        return updated ? this._toDomain(updated) : null;
    }

    async delete(idCarrera) {
        return await CarreraTaxiModel.findOneAndDelete({ idCarrera });
    }

    // mapea documento mongoose -> dominio CarreraTaxi
    _toDomain(doc) {
        if (!doc) return null;
        const plain = typeof doc.toObject === 'function' ? doc.toObject() : doc;
        const CarreraTaxiDomain = new CarreraTaxi({
            idCarrera: plain.idCarrera,
            cliente: plain.cliente,
            taxi: plain.taxi,
            taxista: plain.taxista,
            kilometros: plain.kilometros !== null ? plain.kilometros : null,
            barrioInicio: plain.barrioInicio,
            barrioLlegada: plain.barrioLlegada,
            cantidadPasajeros: plain.cantidadPasajeros,
            precio: plain.precio !== null ? plain.precio : null,
            duracionMinutos: plain.duracionMinutos !== null ? plain.duracionMinutos : null
        });

        // restablecer estado y fechas desde BD
        CarreraTaxiDomain.estado = plain.estado;
        CarreraTaxiDomain.fechaSolicitud = plain.fechaSolicitud;
        CarreraTaxiDomain.fechaInicio = plain.fechaInicio;
        CarreraTaxiDomain.fechaFin = plain.fechaFin;

        return CarreraTaxiDomain;
    }

    // mapea dominio o DTO -> persistencia
    _toPersistence(domainOrObj) {
        const o = domainOrObj && domainOrObj.idCarrera ? domainOrObj : domainOrObj;
        return {
            idCarrera: o.idCarrera || o.id || undefined,
            cliente: o.cliente || null,
            taxi: o.taxi || null,
            taxista: o.taxista || null,
            kilometros: (o.kilometros && typeof o.kilometros.valor === 'number') ? o.kilometros.valor : (o.kilometros || null),
            barrioInicio: o.barrioInicio || null,
            barrioLlegada: o.barrioLlegada || null,
            cantidadPasajeros: (o.cantidadPasajeros && o.cantidadPasajeros.valor) ? o.cantidadPasajeros.valor : (o.cantidadPasajeros || null),
            precio: (o.precio && o.precio.valor) ? o.precio.valor : (o.precio || null),
            duracionMinutos: (o.duracionMinutos && o.duracionMinutos.valor) ? o.duracionMinutos.valor : (o.duracionMinutos || null),
            estado: o.estado || 'SOLICITADA',
            fechaSolicitud: o.fechaSolicitud || new Date(),
            fechaInicio: o.fechaInicio || null,
            fechaFin: o.fechaFin || null
        };
    }
}

module.exports = CarreraTaxiRepositoryMongo;